json.extract! feedback, :id, :feedback_id, :situation, :action, :impact_id, :anonymous, :created_at, :updated_at
json.url feedback_url(feedback, format: :json)
