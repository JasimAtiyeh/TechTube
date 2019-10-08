class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
  end

  def logout
    @current_user.reset_session_token
    @current_user = nil
    session[:session_token] = nil
  end

  def ensure_login
    return nil unless session[:session_token]
  end
end
