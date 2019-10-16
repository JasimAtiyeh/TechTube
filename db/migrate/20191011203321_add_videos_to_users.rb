class AddVideosToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :videos, :integer, array: true
  end
end
