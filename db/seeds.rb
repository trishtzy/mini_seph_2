# def seed_brand(filepath)
#   File.open(filepath, "r") do |f|
#     f.each_line do |name|
#       name = name.delete("\n")
#       Brand.create(:name => name)
#     end
#   end
# end
#
# def seed_categories_and_children(filepath)
#   json = File.read("db/categories.json")
#   obj = JSON.parse(json)
#   obj.each_key do |key|
#     c = Category.create(:name => key)
#     obj[key].each do |subkey, subarray|
#       sc = Subcategory.create(:name => subkey,
#                               :category_id => c.id)
#       subarray.each do |ssub|
#         Subsubcategory.create(:name => ssub,
#                               :category_id => c.id,
#                               :subcategory_id => sc.id)
#       end
#     end
#   end
# end
#
# def generate_brand_id
#   max = Brand.count
#   return rand(1..max)
# end
#
# def generate_category_id
#   max = Category.count
#   return rand(1..max)
# end
#
# def generate_subcategory_id
#   max = Subcategory.count
#   return rand(1..max)
# end
#
# def generate_subsubcategory_id
#   max = Subsubcategory.count
#   return rand(1..max)
# end
#
# def seed_products(x)
#   x.times do
#     p = Product.new
#     p.name = FFaker::Product.product_name
#     p.description = FFaker::Lorem.sentence(2)
#     p.price = ((rand) * 100).round(2)
#     p.brand_id = generate_brand_id
#     p.category_id = generate_category_id
#     p.subcategory_id = generate_subcategory_id
#     p.subsubcategory_id = generate_subsubcategory_id
#     p.save
#   end
# end
#
# seed_brand("db/brands.txt")
# seed_categories_and_children("db/categories.json")
# seed_products(60)
#
# puts 'generated'
