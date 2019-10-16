# == Schema Information
#
# Table name: likes
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  likable_type :string           not null
#  likable_id   :integer          not null
#  like         :boolean
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Like < ApplicationRecord
  validates :user_id, :likable_type, :likable_id, presence: true
  # validates :like, allow_nil: true
  validates_inclusion_of :likable_type, in: ['Video', 'Comment']
  validates_inclusion_of :like, in: [true, false]
  validates :user_id, uniqueness: {scope: [:likable_type, :likable_id]}
  belongs_to :user
  # belongs_to :video
  belongs_to :likable, polymorphic: true

  scope :liked, -> { where(like: true) }
  scope :disliked, -> { where(like: false) }
end
