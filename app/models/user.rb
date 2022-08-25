class User < ApplicationRecord
    has_secure_password

    has_many :blogs
    has_many :comments

    validates :username, uniqueness: true
    validates :password, length: {minimum: 8, message: "must be at least 8 characters"}
    validate :contains_number
    validate :lower_case
    validate :upper_case

    def contains_number
        return if password.match(/[0-9]/)
        errors.add :password, 'must contain at least one number'
    end

    def lower_case
        return if password.match(/[a-z]/)
        errors.add :password, 'must contain at least 1 lowercase '
    end

    def upper_case
        return if password.match(/[A-Z]/)
        errors.add :password, 'must contain at least 1 uppercase'
    end
    
end
