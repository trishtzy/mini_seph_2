class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.belongs_to :brand, index: true
      t.belongs_to :category, index: true
      t.belongs_to :subcategory, index: true
      t.belongs_to :subsubcategory, index: true

      t.timestamps
    end
  end
end
