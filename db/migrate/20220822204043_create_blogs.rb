class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.integer :user_id
      t.text :content
      t.string :title
      t.integer :likes
      t.integer :dislikes
      t.string :category

      t.timestamps
    end
  end
end
