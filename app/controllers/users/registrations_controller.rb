class Users::RegistrationsController < Devise::RegistrationsController
  # Extend default Devise gem behavior so that
  # users signing up with the Pro account (plan ID 2)
  # save with a special Stripe subscription function.
  # Otherwise Devise signs up user as usual.
  def create
    super do |resource|
      if params[:plan]
        resource.plan_id = params[:plan]
        if resource.plan_id == 2
          resource.save_with_subscription
        else
          resource.save
        end
      end
    end
  end
end