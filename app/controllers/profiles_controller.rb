class ProfilesController < ApplicationController
  
  # GET to /users/:user_id/profile/new
  def new
    # Render blank profile details form
    @user = User.find( params[:user_id] )
    @profile = @user.build_profile
  end
end