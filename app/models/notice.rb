class Notice < ApplicationRecord
  has_attached_file :polaroid, styles: { original: "250x165>" }, default_url: "missing.png"
  validates_attachment_content_type :polaroid, content_type: /\Aimage\/.*\z/
  validates_length_of :description, minimum: 10, maximum: 127
end
