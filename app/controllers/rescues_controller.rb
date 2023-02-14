class RescuesController < ApplicationController

    skip_before_action :authorize

    def create 
       rescues = Rescue.create!(rescues_params),
       session[:rescues_id] = rescues.id
       render json: rescues, status: :created
    end

    def index 
        render json: Rescue.all, status: :ok
    end
    
    def show 
        render json: @current_rescues, status: :ok
    end
    

    private_methods
    
    def rescues_params
        params.require(:rescue).permit( :name, :password, :email, :phone, :location, :image)
    end

end
