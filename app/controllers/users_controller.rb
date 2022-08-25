class UsersController < ApplicationController

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show_blogs
      user = User.find_by(id: session[:user_id])
      render json: user.blogs
    end
      
    private
      
    def user_params
        params.permit(:username, :password)
    end

end
