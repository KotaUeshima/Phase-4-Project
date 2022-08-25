class BlogsController < ApplicationController

    def index
        render json: Blog.all
    end

    def show
        render json: Blog.find(params[:id])
    end

    def create
        blog = Blog.create!(blog_params)
        render json: blog, status: :created
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            username = user.username
            blog = Blog.find(params[:id])
            if(blog.likedusers.include? username)
                blog.update(likes: blog.likes - 1)
                blog.likedusers.delete(username)
                blog.save
            else
                blog.update(likes: blog.likes + 1)
                blog.likedusers << username
                blog.save
            end
            render json: blog
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    private

    def blog_params
        params.permit(:title, :content, :category, :likes, :dislikes, :user_id, :likedusers)
    end
end
