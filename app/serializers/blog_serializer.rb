class BlogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :title, :likes, :dislikes, :category, :likedusers
  belongs_to :user
end
