class UsersController < ApplicationController
  
  def show
    @user = User.find(params[:id])
    render json: @author, status: 200
    @user_links = @user.links
  end

end
