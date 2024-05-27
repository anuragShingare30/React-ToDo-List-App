import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";
// import Int "mo:base/Int";


// HERE, WE ARE SEEING HOW CRUD WORKS USING MOTOKO ON THE ICP BLOCKCHAIN.
actor Dtodo {
  // THIS IS SIMILAR TO JS OBJECT.
  // HERE, WE HAVE CREATED A DATA TYPE FOR US.
  public type Note = {
    title: Text;
    // age:Int;
  };

  // HERE, WE HAVE CREATED A LIST (notes)
  // INITIALLY IT IS EMPTY.
  // THIS LIST WILL CONTAIN THE Note DATA TYPE.
  stable var notes:List.List<Note> = List.nil<Note>();
  // stable var new_note:List.List<Int> = List.nil<Int>();

  //---------------------------------------------------------------------------//
  // WE HAVE CREATED A PUBLIC FUNCTION, INSIDE THAT WE HAVE A NEW JS OBJECT SIMILAR TO Note.
  // NOW WE WILL STORE THE ITEM IN NEW JS OBJECT THAN PUSH IT IN OUR LIST.
  // THIS IS THE METHOD BY WHICH WE CAN STORE THE ITEM.(STORING)
  public func createNote(titleText:Text) {
    var newNote:Note = {
      title = titleText;
      // age = 12;
    };
    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));
  };
  //---------------------------------------------------------------------------//
  // HERE, WE WILL RETREIVING THE DATA.
  // CONVERTING LIST TO AN ARRAY IN BACKEND IS IMPORTANT.
  public query func readNotes():async [Note]{
    var notesArr = List.toArray(notes);
    return notesArr;
  };

  //---------------------------------------------------------------------------//
  // MY THIS METHOD WE CAN DELETE THE ITEM FROM OUR NOTES AS WE CLICK THE ITEM.
  public func removeNote(id:Nat){
    var list1 = List.take(notes, id);
    var list2 = List.drop(notes, id + 1);
    var result = List.append(list1, list2);
    notes := result;
  };
  //---------------------------------------------------------------------------//
  
}




// 1.   List.take(notes, index) := THIS METHOD WILL REMOVE THE ELEMENTS AFTER AND ONWARDS INDEX.
// LIST = [4,3,2,1]       List.take(notes,2) ======>  LIST = [4,3]

// 2. List.drop(notes, index)  := THIS METHOD WILL REMOVE THE ELEMENT UPTO INDEX AND NOT INCLUDING INDEX.
// LIST = [4,3,2,1]        List.drop(notes, 2) =======>   LIST = [2,1]

// 3. List.append(list_1, list_2)  := THIS WILL APPEND TWO LIST TO FORM A NEW LIST.



// list1 = take(index)
// list2 = drop(index + 1)
// append(list1, list2);