class ApplicationController < ActionController::API

      
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_resp
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_resp
  
  
  def current_adopter
    @current_adopter ||= Adopter.find_by(id: session[:adopter_id])    #memoization 
  end  
  
  def current_rescues
    @current_rescues ||= Rescue.find_by(id: session[:rescues_id])
  end
  
  
  private 
  
  def unprocessable_entity_resp(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
  
  def not_found_resp  
    render json: {errors: "Not Found"}, status: :not_found
  end
  
  def authorize 
    render json: {errors: "Not Authorized"}, status: :unauthorized unless current_adopter
  end

end
