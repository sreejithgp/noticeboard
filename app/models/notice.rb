class Notice < ApplicationRecord
  acts_as_taggable
  geocoded_by :location
  after_validation :geocode
  has_attached_file :polaroid, styles: { original: "250x165>" }, default_url: "missing.png"
  validates_attachment_content_type :polaroid, content_type: /\Aimage\/.*\z/
  validates_length_of :description, minimum: 10, maximum: 127
end
