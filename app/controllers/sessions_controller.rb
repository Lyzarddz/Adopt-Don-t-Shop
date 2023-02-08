class SessionsController < ApplicationController

    skip_before_action :authorize, only: :create

    def create 
        adopter = Adopter.find_by(name: params[:name])
        if adopter&.authenticate(params[:password])
            session[:adopter_id] = adopter.id  
            render json: adopter,  status: :ok
        else
            render json: {errors:["Invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :owner_id
        render json: @current_adopter
    end
    
end
