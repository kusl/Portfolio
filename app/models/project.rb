class Project
  include Mongoid::Document
  field :name, type: String
  field :description, type: String
  field :imageUrl, type: String
  field :tags, type: String
  field :liveUrl, type: String
end
