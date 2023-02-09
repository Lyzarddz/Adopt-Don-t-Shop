class SessionsController < ApplicationController

    skip_before_action :authorize

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
        session.delete :adopter_id
        render json: @current_adopter
    end

end
