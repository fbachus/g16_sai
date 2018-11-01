class CreateFeedbacks < ActiveRecord::Migration[5.2]
  def change
    create_table :feedbacks do |t|
      t.integer :feedback_id
      t.string :situation
      t.string :action
      t.integer :impact_id
      t.boolean :anonymous

      t.timestamps
    end
  end
end
