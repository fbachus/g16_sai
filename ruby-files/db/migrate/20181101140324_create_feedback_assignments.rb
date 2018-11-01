class CreateFeedbackAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :feedback_assignments do |t|
      t.integer :feedback_id
      t.integer :sender_id
      t.integer :receiver_id

      t.timestamps
    end
  end
end
