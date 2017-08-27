class CreateSubsubcategories < ActiveRecord::Migration[5.1]
  def change
    create_table :subsubcategories do |t|
      t.string :name
      t.belongs_to :category, index: true
      t.belongs_to :subcategory, index: true

      t.timestamps
    end
  end
end
