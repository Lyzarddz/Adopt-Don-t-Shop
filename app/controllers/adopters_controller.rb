class AdoptersController < ApplicationController

    skip_before_action :authorize

    def create 
    adopter = Adopter.create!(adopter_params)
    session[:adopter_id] = adopter.id
    render json: adopter, status: :created
    end

    def index 
        render json: Adopter.all, status: :ok
    end

    def show 
        adopter = Adopter.find(params[:id])
        render json: adopter
    end

    def mypets
        adopter = Adopter.find(params[:id])
        pet = adopter.pets
        render json: pet, status: :ok
    end

    def update
        adopter = Adopter.find(params[:id])
        adopter.update!(adopter_params)
        render json: adopter, status: :created
    end

    def destroy
        adopter = Adopter.find(params[:id])
        adopter.destroy
        head :no_content
    end


    private

    def adopter_params
        params.permit( :name, :password, :email, :phone)
    end

end
