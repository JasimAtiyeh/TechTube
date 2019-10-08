class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      respond_to do |format|
        format.json
      end
      render :create #should be something like the video index page later on
    else
      render :json ["Invalid username or password"], status: 422
    end
  end

  def destroy
    if current_user
      logout
      redirect_to api_session_url
    else
      render :json ["Not currently logged in"], status: 404
    end
  end
end
