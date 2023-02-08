class PetsController < ApplicationController

    def index 
        render json: Pet.all, status: :ok
    end

    # def show 
    #     render json: Pet.all, status: :ok
    # end

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
        params.permit(:name, :gender, :age, :breed, :friendly, :house_trained, :health , :description, :rescue_id)
    end

end
