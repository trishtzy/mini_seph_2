class CreateSubcategories < ActiveRecord::Migration[5.1]
  def change
    create_table :subcategories do |t|
      t.string :name
      t.belongs_to :category, index: true

      t.timestamps
    end
  end
end
