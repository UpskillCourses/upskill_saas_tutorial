class AddAttachmentAvatarToProfiles < ActiveRecord::Migration
  def self.up
    change_table :profiles do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :profiles, :avatar
  end
end
