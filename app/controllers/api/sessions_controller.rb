class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      username: params[:user][:username],
      password: params[:user][:password]
    )

    if @user
      login(@user)
      render :show #should be something like the video index page later on
    else
      render :json ["Invalid username or password"], status: 422
    end
  end

  def destroy
    if current_user
      logout
      render {}
    else
      render :json ["Not currently logged in"], status: 404
    end
  end
end
