class AddLikedusersToBlogs < ActiveRecord::Migration[7.0]
  def change
    add_column :blogs, :likedusers, :text, array: true, default: []
  end
end
