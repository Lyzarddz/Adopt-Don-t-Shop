# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_13_012450) do
  create_table "adopters", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone"
  end

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.string "gender"
    t.integer "age"
    t.string "breed"
    t.string "friendly"
    t.string "house_trained"
    t.string "description"
    t.string "health"
    t.integer "rescue_id", null: false
    t.integer "adopter_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
    t.index ["adopter_id"], name: "index_pets_on_adopter_id"
    t.index ["rescue_id"], name: "index_pets_on_rescue_id"
  end

  create_table "rescues", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone"
    t.string "location"
    t.string "image"
  end

  create_table "summaries", force: :cascade do |t|
    t.string "date"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pet_id"
    t.index ["pet_id"], name: "index_summaries_on_pet_id"
  end

  add_foreign_key "pets", "adopters"
  add_foreign_key "pets", "rescues"
  add_foreign_key "summaries", "pets"
end
