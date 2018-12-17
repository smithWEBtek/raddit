class LinkSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :user_id
  belongs_to :user
end
