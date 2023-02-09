class AdoptersController < ApplicationController

    skip_before_action :authorize

    def create 
    adopter = Adopter.create!(adopter_params),
    session[:adopter_id] = adopter.id
    render json: adopter, status: :created
    end

    def index 
        render json: Adopter.all, status: :ok
    end

    def show 
        render json: @current_adopter, status: :ok
    end

    def update
        adopter = Adopter.find(params[:id])
        adopter.update!(adopter_params)
        render json: adopter, status: :created
    end


    private_methods

    def adopter_params
        params.require(:adopter).permit( :name, :password, :email, :phone)
    end

end
