class PetsController < ApplicationController

    skip_before_action :authorize


    def index 
        render json: Pet.all, status: :ok
    end

    def show 
        pet = Pet.find(params[:id])
        render json: pet
    end

    def summaries 
        summary= Pet.where(:id => params[:id]).first
        render json: summary, status: :ok
    end

    def create
        pet = Pet.create!(pet_params)
        render json: pet, status: :created
    end

    def update
        pet = Pet.find(params[:id])
        pet.update!(pet_params)
        render json: pet, status: :created
    end

    def destroy
        pet = current_adopter.pets.find(params[:id])  
        pet.destroy 
        head :no_content 
    end

    private

    def pet_params
        params.permit(:name, :gender, :age, :breed, :friendly, :house_trained, :health , :description, :rescue_id, :adopter_id, :image, :id, :pet)
    end

end
