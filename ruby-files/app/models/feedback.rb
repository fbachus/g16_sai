class Feedback < ApplicationRecord
  after_save :write_json

end

def write_json
  Feedback.all.each do |feedback|
    @feedbackjson = {
      "id" => feedback.id,
      "situation" => feedback.situation,
      "action" => feedback.action,
      "impact" => feedback.impact_id
    }
  end
  File.open("public/feedback.json","w") do |f|
    f.write(@feedbackjson.to_json)
  end

end
