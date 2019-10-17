# == Schema Information
#
# Table name: videos
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to :user
  has_one_attached :video_link
  has_one_attached :thumb_nail
  has_many :likes, as: :likable
  has_many :comments
end
