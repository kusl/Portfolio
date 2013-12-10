json.array!(@projects) do |project|
  json.extract! project, :id, :name, :description, :imageUrl, :tags, :liveUrl
  json.url project_url(project, format: :json)
end
