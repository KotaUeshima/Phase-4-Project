class CommentsController < ApplicationController

    def create
        user = User.find_by(id: session[:user_id])
        if user
            comment = Comment.create(comment_params)
            render json: comment, status: :created
       else
            render json: "Cannot comment", status: :unauthorized
       end
    end

    def show
        blog = Blog.find(params[:id])
        render json: blog.comments
    end

    private

    def comment_params
        params.permit(:content, :blog_id, :user_id)
    end
end
