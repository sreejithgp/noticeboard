class AddLatitudeAndLongitudeToNotice < ActiveRecord::Migration[5.1]
  def change
    add_column :notices, :location, :string
    add_column :notices, :latitude, :float
    add_column :notices, :longitude, :float
  end
end
