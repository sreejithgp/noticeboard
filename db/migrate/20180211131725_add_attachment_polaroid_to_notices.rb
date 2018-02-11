class AddAttachmentPolaroidToNotices < ActiveRecord::Migration[5.1]
  def self.up
    change_table :notices do |t|
      t.attachment :polaroid
    end
  end

  def self.down
    remove_attachment :notices, :polaroid
  end
end
