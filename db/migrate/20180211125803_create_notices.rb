class CreateNotices < ActiveRecord::Migration[5.1]
  def change
    create_table :notices do |t|
      t.string :description, limit: 127

      t.timestamps
    end
  end
end
