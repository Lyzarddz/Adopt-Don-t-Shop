class PetsController < ApplicationController

    def index 
        render json: Pet.all, status: :ok
    end

    def show 
        
    end

    def create
        pet = Pet.create!(pet_params)
        render json: pet, status: :created
    end

    def destroy
        pet = current_adopter.pets.find(params[:id])  
        pet.destroy 
        head :no_content 
    end

    private

    def pet_params
        params.permit(:name, :gender, :age, :friendly, :house_trained, :health , :description, :adopters_id, :rescues_id)
    end

end
