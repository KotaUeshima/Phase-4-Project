class SessionsController < ApplicationController

    # handle login, if username and password exists, creates session
    # otherwise, return error message 
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :accepted
        else
            render json: {error: "Invalid Credentials"}, status: :unauthorized
        end
    end

    # handle logout, deletes session[:user_id]
    def destroy
        session.delete (:user_id)
        head :no_content
    end

end