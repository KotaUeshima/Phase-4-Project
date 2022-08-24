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
        render json: user, status: :created
    end
      
    private
      
    def user_params
        params.permit(:username, :password)
    end

end
