class PagesController < ApplicationController
  # GET request for / which is our home page
  def home
    @basic_plan = Plan.find(1)
    @pro_plan = Plan.find(2)
  end
  
  def about
  end
end