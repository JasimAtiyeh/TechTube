class AddChannelNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :channel_name, :string, unique: true
  end
end
