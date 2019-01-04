class UsersController < ApplicationController
  
  def show
    @user = User.find(params[:id])
    render json: @user, status: 200
    @user_links = @user.links
  end

end
