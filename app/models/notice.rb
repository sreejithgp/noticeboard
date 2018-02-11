class Notice < ApplicationRecord
  has_attached_file :polaroid, styles: { medium: "250x165>", thumb: "100x100>" }
  validates_attachment_content_type :polaroid, content_type: /\Aimage\/.*\z/
  validates_attachment_presence :polaroid
  validates_length_of :description, minimum: 10, maximum: 127
end
