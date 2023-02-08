class Api::AdoptersController < ApplicationController

    skip_before_action :authorize, only: :create

    def create 
    adopter = Adopter.create!(adopter_params),
    session[:adopter_id] = adopter.id
    render json: adopter, status: :created
    end

    def show 
        render json: Adopter.all, status: :ok
    end

    private_methods

    def adopter_params
        params.require(:adopter).permit( :name, :password, :email)
    end

end
