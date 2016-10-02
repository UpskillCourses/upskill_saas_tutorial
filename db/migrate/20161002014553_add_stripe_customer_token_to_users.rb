class AddStripeCustomerTokenToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :stripe_customer_token, :string
  end
end
