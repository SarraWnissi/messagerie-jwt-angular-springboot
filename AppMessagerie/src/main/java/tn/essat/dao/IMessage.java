package tn.essat.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import tn.essat.model.Message;



@Repository
public interface IMessage extends JpaRepository<Message,Integer>{

	@Query("select m from Message m where m.usersend.id=?1 and etat!=3 and etat!=4")
	public List<Message> getAllMessagsSend(int id);
	

	@Query("select m from Message m where m.userreceive.id=?1 and etat!=2 and etat!=4")
	public List<Message> getAllMessagsReceive(int id);
	
}
