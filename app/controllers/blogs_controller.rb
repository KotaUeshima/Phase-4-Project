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

    private

    def blog_params
        params.permit(:title, :content, :category, :likes, :dislikes, :user_id)
    end
end
