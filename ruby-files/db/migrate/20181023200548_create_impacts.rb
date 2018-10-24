class CreateImpacts < ActiveRecord::Migration[5.2]
  def change
    create_table :impacts do |t|
      t.integer :impact_id
      t.string :feeling
      t.timestamps
    end
  end
end
